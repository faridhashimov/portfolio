import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1
                style={{
                    color: '#a8dadc',
                    fontSize: '200px',
                    lineHeight: '200px',
                    fontWeight: 600,
                }}
            >
                404
            </h1>
            <h2
                style={{
                    color: '#222',
                    fontSize: '40px',
                    lineHeight: '45px',
                    fontWeight: 400,
                }}
            >
                Page Not Found
            </h2>
            <Link
                style={{
                    border: '1.5px solid #a8dadc',
                    padding: '20px 28px',
                    fontWeight: 500,
                    marginTop: '60px',
                    borderRadius: '4px',
                    color: '#a8dadc',
                }}
                to="/"
            >
                Go Home
            </Link>
        </div>
    )
}

export default ErrorPage
