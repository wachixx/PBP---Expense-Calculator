import React from 'react';
import {Table } from 'semantic-ui-react';

const TableRow = (props) => {
    return (
        <Table.Row key={props.transaction.id}>
            <Table.Cell>{props.transaction.posted_at}</Table.Cell>
            <Table.Cell>{props.transaction.description}</Table.Cell>
            <Table.Cell>{props.transaction.category}</Table.Cell>
            <Table.Cell>{props.transaction.amount}</Table.Cell>
        </Table.Row>
    )
}

export default TableRow;