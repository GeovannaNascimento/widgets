import React from 'react';
import { View } from 'react-native';
import Cabecalho from './cabecalho';
import Corpo from './corpo';
import Rodape from './rodape';
const App = () => {
return (
<View>
<Cabecalho />
<Corpo />
<Rodape />
</View>
);
};
export default App;