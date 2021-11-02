import http from 'http';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import type { NextApiHandler } from 'next';
import type { INestApplication } from '@nestjs/common';

import { appConfig } from 'shared/config';

import { AppModule } from './app';

// eslint-disable-next-line functional/no-let
let app: INestApplication | undefined;

const initializeNestApplication = async (): Promise<INestApplication> => {
  if (!app) {
    app = await NestFactory.create(AppModule, {
      bodyParser: false,
      cors: {
        origin: appConfig.baseURL,
      },
    });

    app.setGlobalPrefix('api');

    return app.init();
  }

  return app;
};

export const getHTTPListener = async (): Promise<NextApiHandler> => {
  const server: http.Server = (
    await initializeNestApplication()
  ).getHttpServer();

  const [listener] = server.listeners('request') as [NextApiHandler];

  return listener;
};
