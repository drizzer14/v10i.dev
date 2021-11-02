/*
  eslint-disable eslint-comments/disable-enable-pair, 
  prefer-arrow/prefer-arrow-functions
 */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// eslint-disable-next-line functional/no-class
export default class extends Document {
  public static override async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = context.renderPage;

    context.renderPage = () => {
      return originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    };

    return Document.getInitialProps(context)
      .then((initialProps) => {
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}

              {sheet.getStyleElement()}
            </>
          ),
        };
      })
      .finally(() => {
        sheet.seal();
      });
  }

  public override render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
