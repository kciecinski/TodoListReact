import React from 'react';
import {
  Layout, Header, Content, Grid, Cell,
} from 'react-mdl';

export default function AppLayout(props) {
  return (
    <Layout>
      <Header title="Todo List" style={{ color: 'white' }} />
      <Content>
        <Grid>
          <Cell col={3} />
          <Cell col={6}>
            {props.children}
          </Cell>
          <Cell col={3} />
        </Grid>
      </Content>
    </Layout>
  );
}
