import { createEffect, createSignal, type Component } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const [isEven, setIsEven] = createSignal<boolean>(false);

  createEffect(() => {
    if (count() % 2 == 0) {
      setIsEven(true);
    } else {
      setIsEven(false);
    }
  });
  
  return (
    <div class={""}>
      <button onClick={[increment, 4]}>Increment</button>
      <button on:click={decrement}>Decrement</button>
      <p>{count()}</p>
      <p>{isEven() ? "Even" : "Odd"}</p>
    </div>
  );
};

export default App;
