import React from 'react'
import AuthGuard from '../../Layout/AuthGuard'
import ComingSoon from '../../component/ComingSoon'

const ComingSoonPage = () => {
    return (
        <AuthGuard>
            <ComingSoon />
        </AuthGuard>
    )
}

export default ComingSoonPage