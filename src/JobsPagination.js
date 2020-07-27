import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function JobsPagination({page, setPage}) {
    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev />}
            {page !== 1 && <Pagination.Item>{page - 1}</Pagination.Item>}
            {page > 2 && <Pagination.Item>1</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis />}
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Item>{page + 1}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    )
}
