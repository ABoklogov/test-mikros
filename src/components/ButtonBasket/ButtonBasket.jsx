import Stack from '@mui/material/Stack';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
  500: '#0097FF',
  600: '#0072E5',
  700: '#0059B2',
};
const CustomButtonRoot = styled('button')`
  ${'' /* font-family: Gotham Pro; */}
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 17px 22px;
  border-radius: 10px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const ButtonBasket = () => {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton>В КОРЗИНУ</CustomButton>
    </Stack>
  );
};

export default ButtonBasket;
