import React from 'react';


import StickyBox from 'react-sticky-box';

import FollowSugestion from '../FollowSugestion';
import List from '../List';
import News from '../News';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder='Buscar no Twitter'/>
            <SearchIcon/>
        </SearchWrapper>
        <StickyBox>
        <Body>
            <List title='Talvez você curta'
                  elements={[
                    <FollowSugestion
                      name='leo'
                      nickname = '@GabrielLeo'
                    />,
                    <FollowSugestion
                      name='bruno_sombra9'
                      nickname = '@luiz_monteiro6'
                    />,
                    <FollowSugestion
                      name='Babizinha'
                      nickname = '@Sassybacon'
                    />
                  ]}
            />
            <List title='Talvez você curta'
                  elements={[<News/>,<News/>,<News/>]}
            />
            <List title='Talvez você curta'
                  elements={[<News/>,<News/>,<News/>]}
            />
            <List title='Talvez você curta'
                  elements={[<News/>,<News/>,<News/>]}
            />
            
        </Body>
        </StickyBox>
        
    </Container>
  );
}

export default SideBar;