"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from "@/lib/redux";
import styles from "./counter.module.css";
import { Button } from "@/components/ui/button";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <div className={styles.row}>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </Button>
        <span className={styles.value}>{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-2 justify-center items-center">
        <input
          className="border-[#0F172A] border-2 m-auto py-2 text-center text-xl bold max-w-16 rounded-lg"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <div className="flex gap-2 justify-center items-center">
          <Button
            onClick={() =>
              dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
            }
          >
            Add Amount
          </Button>
          <Button
            onClick={() => dispatch(incrementAsync(incrementAmount))}
          >
            Add Async
          </Button>
          <Button
            onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
          >
            Add If Odd
          </Button>
        </div>
      </div>
    </div>
  );
};
