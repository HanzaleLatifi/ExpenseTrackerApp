import React from 'react'

function Transaction({ transaction }) {

    return (
        <div className='transaction-container'>
            {transaction.map(trans => {
                return (
                    <div className='tranaction' style={{borderRight:trans.type==='expense'?'.4rem solid red':'.4rem solid green'}} key={trans.id} >
                        <p>{trans.desc}</p>
                        <span>{trans.type==='expense' ? '- ':'+ ' }{trans.amount} $</span>
                    </div>
                )

            })}

        </div>
    )
}

export default Transaction
