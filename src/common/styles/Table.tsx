import styled from "@emotion/styled";
import tw from "twin.macro";

export const StyledTable = styled.div`
  ${tw`w-full border border-solid border-gray-300 overflow-x-auto`}

  .table {
    ${tw`w-full mb-0`}
  }

  tr {
    ${tw`whitespace-nowrap border-solid border-t border-gray-300`}
  }

  th {
    ${tw`mt-0 align-middle px-2`}
  }

  td {
    ${tw`align-middle whitespace-nowrap border-t-0 p-3`}
  }

  .table-thead {
    th,
    td {
      border: none;
    }
  }

  .table-thead {
    ${tw`text-white bg-denim`}
  }

  .table-tbody {
    ${tw`bg-white`}

    tr {
      &:nth-of-type(even) {
        ${tw`bg-gray-50`}
      }
    }
  }
`;
