import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_POINT_TRANSACTION = gql`
  mutation createLoginPointTransaction(
    $createPointTransactionInput: CreatePointTransactionInput!
  ) {
    createLoginPointTransaction(
      createPointTransactionInput: $createPointTransactionInput
    ) {
      id
      impUid
      amount
      status
    }
  }
`;

export const useMutationCreatePointTransaction = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreatePointTransactionArgs
  >(CREATE_POINT_TRANSACTION);
  return mutation;
};
