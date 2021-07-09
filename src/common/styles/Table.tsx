import styled from "@emotion/styled";
import tw from "twin.macro";

export const StyledTable = styled.div`
  ${tw`w-full overflow-x-auto`}

  .table {
    ${tw`w-full mb-0`}
  }

  tr {
    ${tw`p-2 whitespace-nowrap`}
  }

  th {
    ${tw`bg-white text-cloud-900 text-xl text-left mt-0 px-2`}
  }

  td {
    ${tw`text-cloud-900 align-middle whitespace-nowrap px-3 md:p-3`}
  }

  .table-thead {
    th,
    td {
      border: none;
    },
  }

  .table-thead {
    ${tw`text-white`}
  }

  // .table-tbody {
  //   ${tw`bg-white`}
  // }
`;
