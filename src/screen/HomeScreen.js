import React from 'react';
import {useUser} from '../contexts/UserProvider';
import {
  Button,
  Center,
  Divider,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';
import UserScreen from './UserScreen';
const HomeScreen = ({navigation}) => {
  const {users} = useUser();
  return (
    <ScrollView>
      <Center height="50px" backgroundColor="blue.600">
        <Text color="white" fontSize="19px" fontWeight="bold">
          Test=API
        </Text>
      </Center>
      <Center marginTop="15px">
        <Button
          width="280px"
          backgroundColor="blue.500"
          onPress={() => navigation.navigate('AddUserScreen')}>
          Add User
        </Button>
      </Center>
      <VStack marginTop="15px">
        <Divider />
        {users.map((item, key) => (
          <Pressable
            key={key}
            onPress={() => navigation.navigate('UserScreen', {item: item})}>
            <HStack alignItems="center" paddingX="16px" paddingY="8px">
              <Icon name="link" size={24}></Icon>
              <VStack paddingX="16px">
                <Text fontWeight="bold">
                  {`${item.firstname}  ${item.lastname}`}
                </Text>
                <Text fontWeight="bold">
                  Age: {dayjs().diff(dayjs(item.birthdate), 'year')}
                </Text>
              </VStack>
            </HStack>
            <Divider />
          </Pressable>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
