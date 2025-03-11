import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `ほげ山ほげ太郎${val}`,
        image: 'https://media.istockphoto.com/id/1166067883/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%8F%8D%E3%81%97%E3%81%84%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%93%E3%83%AB%E3%81%AE%E9%87%8E%E7%94%9F%E5%8B%95%E7%89%A9%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88.jpg?s=1024x1024&w=is&k=20&c=auxUFC2N0UZ1V5DthGWJBq3U1C2xgZ-5a0vEbHIKgrs=',
        email: 'hoge@hoge.com',
        phone: '000-1111-2222',
        company: {
            name: 'ほげほげ株式会社',
        },
        website: 'https://google.com',
    };
});

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;
