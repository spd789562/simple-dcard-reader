import styled from 'styled-components';

const Loading = styled.div`
  width: ${({ width = '16px' }) => width};
  height: ${({ height = '16px' }) => height};
  display: inline-block;
  border-width: ${({ borderWidth = '3px' }) => borderWidth};
  border-color: ${({ borderColor = '#00324e' }) => borderColor};
  border-right-color: #ccc;
  animation: rotate 1s linear infinite;
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
