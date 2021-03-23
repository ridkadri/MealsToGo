import React from 'react';
import { SvgXml } from 'react-native-svg';

import {Spacer} from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component'
import star from '../../../../assets/star';
import open from '../../../../assets/open';

import 
{
    RestaurantCard,
    RestaurantCardCover,
    Address,
    Title,
    Info,
    Rating,
    Section,
    SectionEnd,
    Open,
    Icon
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {}} ) => {
    const {
        name = 'Papaye', 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
        photos = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeautifulghana.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fgrill-thigh-rice-no-bg_600x325.png&f=1&nofb=1"], 
        address = '100 Osu Oxford St', 
        isOpenNow = true, 
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0] }}/>
            <Info>
                <Title variant='label'>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(()=> (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant='error'>CLOSED TEMPORARILY</Text>
                        )}
                        <Spacer position='left' size='large'>
                            {isOpenNow && <Open xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position='left' size='large'>
                            <Icon source={{uri: icon}}/>
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
};