import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
`;

export default function UserCard2() {
    return (
        <Card>
            <h4>김평식</h4>
            <p>dhakslzja@naver.com</p>
        </Card>
    );
}