import useCounter from "../hooks/useCounter";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function Counter({ start }) {
  const { counter, increase, decrease } = useCounter(start);

  return (
    <div>
      <h2>{counter}</h2>
      <Button
        variant="outlined"
        onClick={increase}
        color="success"
        startIcon={<ArrowUpwardIcon />}
      >
        Increase
      </Button>
      <Button
        variant="contained"
        onClick={decrease}
        endIcon={<ArrowDownwardIcon />}
      >
        Decrease
      </Button>
    </div>
  );
}

export default Counter;
