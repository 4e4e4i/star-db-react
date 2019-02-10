import React from 'react';

import { SwapiServiceCosumer } from "../swapi-service-context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {

    return (props) => {
        return(
            <SwapiServiceCosumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);

                        return (
                            <Wrapped { ...props } { ...serviceProps }/>
                        )
                    }
                }
            </SwapiServiceCosumer>
        );
    }
};

export default withSwapiService;
