import { View, Text } from 'react-native'
import React, { useState } from 'react'

function LoadingComponent() {
    const word = 'Loading...'
    const [text, setText] = useState('')
    let count = 0
    // useEffect(() => {
    //     const time = setInterval(() => {
    //         if (word[count] == undefined) {
    //             setText('')
    //             count = 0
    //         }
    //         setText(prev => prev + word[count])
    //         count++
    //     }, 1000)
    //     return () => clearImmediate(time)
    // }, [])

    return (
        <View>
            {/* <Text>{text}</Text> */}
            <Text>Loading...</Text>
        </View>
    )
}
export default React.memo(LoadingComponent)