import React from 'react';
import { Grid, Segment } from "semantic-ui-react";

export default function CenteredGridLayout(props) {
    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <h2>{ props.title }</h2>
                <Segment>
                    { props.children }
                </Segment>
            </Grid.Column>
        </Grid>
    );
}
