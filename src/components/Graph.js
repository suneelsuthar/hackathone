import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {View, Text, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
export default class Graph extends React.Component {
  render() {
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false, // optional
    };
    const data = [
      {
        name: 'Confirmed',
        population: Number(this.props.data.confirmed),
        color: 'rgb(121, 156, 255)',
        legendFontColor: 'rgb(121, 156, 255)',
        legendFontSize: 12,
      },
      {
        name: 'Recoverd',
        population: Number(this.props.data.recovered),
        color: 'rgb(236, 139, 55)',
        legendFontColor: 'rgb(236, 139, 55)',
        legendFontSize: 12,
      },
      {
        name: 'Deaths',
        population: Number(this.props.data.deaths),
        color: 'rgb(77, 187, 111)',
        legendFontColor: 'rgb(77, 187, 111)',
        legendFontSize: 12,
      },
    ];

    return (
      <View style={{padding: 10, marginTop: 20}}>
        <PieChart
          data={data}
          width={screenWidth}
          height={210}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          absolute
        />
      </View>
    );
  }
}
