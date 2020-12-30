import styled from "@emotion/styled";
import tw from "twin.macro";

export const StyledTable = styled.div`
  ${tw`w-full border border-solid border-grey-300 overflow-x-auto scrolling-touch`}

  .table {
    ${tw`w-full mb-0`}
  }

  tr {
    ${tw`whitespace-no-wrap border-solid border-t border-grey-300`}
  }

  th {
    ${tw`mt-0 align-middle px-2`}
  }

  td {
    ${tw`align-middle whitespace-no-wrap border-t-0 p-3`}
  }

  .table-thead {
    th,
    td {
      border: none;
    }
  }

  .table-thead {
    ${tw`text-white bg-navy`}
  }

  .table-tbody {
    ${tw`bg-white`}

    tr {
      &:nth-of-type(even) {
        ${tw`bg-grey-100`}
      }
    }
  }
`;
