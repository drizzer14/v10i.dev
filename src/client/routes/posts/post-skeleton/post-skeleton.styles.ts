import styled from 'styled-components';

export const PostSkeleton = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const DescriptionSkeleton = styled.div`
  margin-top: 1rem;
`;

export const MetaSkeleton = styled.div`
  display: flex;
  align-items: center;

  color: var(--faint-weak);
`;
