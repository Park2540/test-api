try {
      console.log(11211)
      // await axios.get('https://f57a-2001-fb1-108-9ce5-bd7b-4098-2edc-1a7c.ap.ngrok.io/')
      // console.log(1122211)

      const response = await axios.get(
        'https://f57a-2001-fb1-108-9ce5-bd7b-4098-2edc-1a7c.ap.ngrok.io/',
      );
      console.log(JSON.stringify(response.data))

      Alert.alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      console.log('error')
      console.log(error)
      Alert.alert(error.message);
    }