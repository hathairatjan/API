import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  HStack,
  IconButton,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import {useUser} from '../contexts/UserProvider';

const initForn = {
  firstname: '',
  lastname: '',
  birthdate: new Date(),
  phone: '',
  email: '',
  password: '',
};

const AddUserScreen = ({navigation}) => {
  const {createUser} = useUser();
  const [date, setDate] = useState(new Date());
  const [formValues, setFormValues] = useState(initForn);
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    createUser(formValues).then(() => {
      navigation.navigate('HomeScreen');
    });
  };

  return (
    <ScrollView>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={formValues.birthdate}
        onConfirm={date => {
          setFormValues(prev => ({...prev, birthdate: date}));
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <HStack height="50px" backgroundColor="blue.600" alignItems="center">
        <Box>
          <IconButton
            icon={<Icon name="chevron-left" size={24} color="white" />}
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </Box>

        <Text color="white" fontSize="19px" fontWeight="bold">
          Add User
        </Text>
        <Box></Box>
      </HStack>
      <VStack paddingX="16px" paddingY="16px">
        <FormControl marginBottom="8px">
          <FormControl.Label>firstname</FormControl.Label>
          <Input
            variant="outline"
            value={formValues.firstname}
            onChangeText={text =>
              setFormValues(prev => ({...prev, firstname: text}))
            }
          />
        </FormControl>

        <FormControl marginBottom="8px">
          <FormControl.Label>lastname</FormControl.Label>
          <Input
            variant="outline"
            value={formValues.lastname}
            onChangeText={text =>
              setFormValues(prev => ({...prev, lastname: text}))
            }
          />
        </FormControl>

        <FormControl marginBottom="8px">
          <FormControl.Label>birthdate</FormControl.Label>
          <Input
            variant="outline"
            onFocus={() => setOpen(true)}
            value={dayjs(formValues.birthdate).format('DD/MM/YY')}
          />
        </FormControl>

        <FormControl marginBottom="8px">
          <FormControl.Label>phone</FormControl.Label>
          <Input
            variant="outline"
            value={formValues.phone}
            onChangeText={text =>
              setFormValues(prev => ({...prev, phone: text}))
            }
          />
        </FormControl>

        <FormControl marginBottom="8px">
          <FormControl.Label>email</FormControl.Label>
          <Input
            variant="outline"
            value={formValues.email}
            onChangeText={text =>
              setFormValues(prev => ({...prev, email: text}))
            }
          />
        </FormControl>

        <FormControl marginBottom="8px">
          <FormControl.Label>password</FormControl.Label>
          <Input
            variant="outline"
            value={formValues.password}
            onChangeText={text =>
              setFormValues(prev => ({...prev, password: text}))
            }
          />
        </FormControl>

        <Button marginTop="24px" onPress={handleSubmit}>
          ??????????????????
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default AddUserScreen;
