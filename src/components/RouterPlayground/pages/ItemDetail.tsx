import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { name: string };
interface IProps {
  match: RouteComponentProps<TParams>
}

function ItemDetail(props: IProps) {
  return (
    <>
      <div>
        ITEM DETAIL PAGE!
      </div>

      <div><strong>name:</strong> {props.match.params.name}</div>
    </>
  );
}

export default ItemDetail;
