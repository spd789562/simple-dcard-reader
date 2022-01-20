import styled from 'styled-components';

const Loading = styled.div`
  width: ${(props = '16px') => props.width};
  height: ${(props = '16px') => props.height};
  display: inline-block;
  border-width: ${(props = '3px') => props.borderWidth};
  border-color: ${(props = '#00324e') => props.borderColor};
  border-right-color: #ccc;
  animation: rotate 1s linear infinite;
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
