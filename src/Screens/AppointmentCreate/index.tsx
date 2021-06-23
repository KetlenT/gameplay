import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import {
    Text,
    View,
    Platform,
    ScrollView,
    KeyboardAvoidingView

} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Background } from '../../components/Background/index';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';


import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ButtonAdd } from '../../components/ButtonAdd';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <Background>

                    <Header
                        title='Agendar partidas'
                    />
                    <Text
                        style={[styles.label,
                        { marginLeft: 24, marginTop: 36, marginBottom: 18 }]} >

                        Categoria
            </Text>

                    <CategorySelect
                        setCategory={setCategory}
                        categorySelected={category}
                        hasCheckBox />

                    <View style={styles.form}>
                        <RectButton>
                            <View style={styles.select}>
                                {
                                    //<View style={styles.image} />
                                    <GuildIcon />}

                                <View style={styles.selectBody} >
                                    <Text style={styles.label}>Selecione um Servidor</Text>
                                </View>

                                <Feather
                                    name='chevron-right'
                                    color={theme.colors.heading}
                                />

                            </View>
                        </RectButton>


                        <View style={styles.field}>
                            {/*view day */}
                            <View>
                                <Text style={styles.label}>
                                    Dia e Mês
                        </Text>
                                <View style={styles.column}>

                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider} >
                                        /
                        </Text>
                                    <SmallInput maxLength={2} />

                                </View>
                            </View>

                            {/*view Hour */}
                            <View>

                                <Text style={styles.label}>
                                    Hora e Minuto
                        </Text>
                                <View style={styles.column}>

                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider} >
                                        :
                            </Text>
                                    <SmallInput maxLength={2} />

                                </View>

                            </View>

                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                    </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                    </Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />


                        <View style={styles.footer} >
                            <Button
                                title='Agendar' />
                        </View>
                    </View>


                </Background >
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
