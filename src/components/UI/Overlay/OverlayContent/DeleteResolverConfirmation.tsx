import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { OverlayContentProps } from "./index";

interface DeleteResolverConfirmationProps extends OverlayContentProps {
  name: string;
  deleteAddress: () => void;
}

export const DeleteResolverConfirmation: FunctionComponent<DeleteResolverConfirmationProps> = ({
  name,
  deleteAddress,
}) => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();

  return (
    <div className="relative bg-white rounded-xl w-96 h-72 p-8">
      <div className="flex flex-col">
        <h3 className="font-ubuntu text-1.625 font-normal text-cloud-900">Delete Address Resolver</h3>
        <p className="text-cloud-900 mt-5">Are you sure you want to delete this address resolver?</p>
        <p className="text-cloud-900 mt-5">{name}</p>
        <div className="flex flex-row mt-5">
          <div
            className="flex bg-white border rounded-lg shadow-xl w-16 h-9 items-center justify-center text-cerulean cursor-pointer"
            onClick={() => {
              setOverlayVisible(false);
              showOverlay(undefined);
            }}
          >
            Cancel
          </div>
          <div
            className="flex bg-rose rounded-lg w-16 h-9 ml-8 items-center justify-center text-white cursor-pointer"
            onClick={deleteAddress}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

// export const DeleteResolverConfirmation: FunctionComponent<DeleteResolverConfirmationProps> = ({
//   name,
//   deleteAddress,
//   ...props
// }) => {
//   const { setOverlayVisible, showOverlay } = useOverlayContext();

//   return (
//     <OverlayContent className="max-w-md" {...props}>
//       <div className="flex-1">
//         <p>Are you sure you want to delete {name}?</p>
//       </div>
//       <div className="flex mx-0">
//         <div className="col-auto ml-auto mr-2">
//           <Button
//             className="bg-white text-gray-500 hover:bg-gray-50"
//             onClick={() => {
//               setOverlayVisible(false);
//               showOverlay(undefined);
//             }}
//           >
//             Cancel
//           </Button>
//         </div>
//         <div className="col-auto">
//           <Button className="bg-rose-400 text-white hover:bg-red-400" onClick={deleteAddress}>
//             Delete
//           </Button>
//         </div>
//       </div>
//     </OverlayContent>
//   );
// };
