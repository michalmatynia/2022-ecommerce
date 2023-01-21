// import { useHook } from "@common/utils/use-hook";

// const useAddItem = () => {
//   const hook = useHook((hooks) => {
//     return hooks.cart.useAddItem;
//   });

//   return hook.useHook();
// };

// export default useAddItem;

//----

// import { useHook } from "@common/utils/use-hook";

// const useAddItem = () => {
//   const hook = useHook((hooks) => {
//     return hooks.cart.useAddItem;
//   });
//   return hook.useHook();
// };

// export default useAddItem;

import { MutationHook } from "@common/types/hooks";
import { useHook, useMutationHook } from "@common/utils/use-hook";

export type UseAddItem<H extends MutationHook = MutationHook<any>> = ReturnType<
  H["useHook"]
>;

const useAddItem: UseAddItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useAddItem;
  });

  return useMutationHook({ ...hook })();
};

export default useAddItem;
