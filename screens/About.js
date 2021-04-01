import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default function About(props) {
    return (
        <ScrollView>
            <View>
            <Image source={require('../assets/aboutPic.jpeg')} style={styles.Image}/>
                <Text style={styles.TitleKu}>  دەربارەی پێما بە کوردی</Text>
                    <Text style={styles.TextKu}>
                    پێما بە زمانی سانسکریت مانای کوڵی لۆتەسی هەیە. بێگومان ئەمە یەنها دەربارەی کوڵەکە نیە و باس لەو شێوەیە دەکات کە کەسەکان هەیانە وەختێک مێدیتەیشن دەکەن.  ئەپڵیکەیشنی پێما بۆ هەموو ئەو کەسانە درووستکراوە کە دەیانەێت زیاتر لەسەر ڕاهێنانی مێدیتەیشن بزانن... جێی تێبینیە بۆ ئەو کەسانە کە بزانن، من وەکو بەرهەمهێنەری ئەم ئەپڵیکەیشنە شارازا نیم لە بواری مێدیتەیشن. تەنها خولیایەکە بۆ من  
                    </Text>
            </View>
            <View>
                <Text style={styles.TitleAr}>عن پیما بلعربى</Text>
                    <Text style={styles.TextAr}>
                        تطبيق بیما، القصة بدا مع حبى للتامل. لالذین یستمتعون بالاستماع لتاملات. انا لست بپروفیشنال فی هاذا المجال، لکننی احب تامل جدا، و احب تیکنولوجیا. التطبیق مجرد برمجة للعرض. من ويكيبيديا، الموسوعة الحرة. Pema (التبتية: པད་ མ ، Wylie: pad ma) هو اسم تيبتي يعني "لوتس" ، نشأ على أنه كلمة مستعارة من اللغة السنسكريتية بادما.
                    </Text>
            </View>
            <View>
            <Text style={styles.TitleEn}>About pema: English</Text>
                <Text style={styles.TextEn}>From Wikipedia, the free encyclopedia. Pema (Tibetan: པད་མ, Wylie: pad ma) is a Tibetan name meaning "lotus", which originated as a loanword from Sanskrit padma. Pema's story was a beautiful unfolding of my journey and dare I say, my purpose. I have always believed that meditations are one of the best forms of mindfulness practices. This project does not in any way mean or imply that I am a mindfulness practitioner/professional. Enjoy!</Text>
            </View>
        </ScrollView>    
    )
}
const styles = StyleSheet.create({
    TitleEn: {
        marginBottom: 10,
        marginTop: -710,
        marginLeft: 70,
        fontSize: 35,
        width: 330,
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.5,
        borderRadius: 200,
    },
    TextEn: {
        alignContent: 'center',
        marginBottom: -150,
        marginLeft: 10,
        fontSize: 15,
        width: 400,
        backgroundColor: '#ffffff',
        opacity: 0.5
    },
    Image: {
        width: 500,
        height: 1000,
        opacity: 0.8,
    },
    TitleKu: {
        marginBottom: 10,
        marginTop: -460,
        marginLeft: 70,
        fontSize: 35,
        width: 320,
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.5,
        borderRadius: 200,
    },
    TextKu: {
        marginLeft: 10,
        fontSize: 17,
        width: 400,
        backgroundColor: '#ffffff',
        opacity: 0.5
    },
    TitleAr: {
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 120,
        fontSize: 35,
        width: 200,
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.5,
        borderRadius: 200,
    },
    TextAr: {
        marginLeft: 10,
        fontSize: 17,
        width: 400,
        backgroundColor: '#ffffff',
        opacity: 0.5
    },
});