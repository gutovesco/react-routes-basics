import React from 'react'

export default function User() {
    let list = [
        {
            name: "Gutro",
            email: "Gutro.Link@hotmail.com"
        },
        {
            name: "Claudin Tei Tei",
            email: "claudin.teitei@hotmail.com"
        }
    ]
    return (
        <div>
            <table border="1">
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {list.map((item) => {
                return <tr>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.email}
                    </td>
                </tr>
            })}
            </table>
        </div>
    )
}
