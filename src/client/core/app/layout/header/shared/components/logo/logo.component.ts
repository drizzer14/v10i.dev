import styled from 'styled-components';

import { size } from '@/shared/mixin';
import { Icon } from '@/shared/components';

export const Logo = styled(Icon).attrs({
  name: 'logo',
})`
  ${size('1.5rem')};

  margin-right: 1px;
`;
