import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        flex: 1;
        height: 5px;
        margin: 0 1.5rem;
        border-radius: 4px;
        background-color: var(--gray-line);

        div{
            margin: 0;
            background-color: var(--green);
        }

        span {
            position: absolute;
            padding: 8px;
            transform: translateX(-50%);
        } 
    }
    
`

const ExperienceBar: React.FC = () => {
    return (
        <Header>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%'}} />
                <span style={{ left: '50%' }}>300 xp</span>
            </div>

            <span>600 xp</span>
        </Header>
    )
}

export default ExperienceBar