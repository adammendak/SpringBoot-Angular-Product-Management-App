package com.adammendak.productmanagement.model.mapper;

import com.adammendak.productmanagement.model.User;
import com.adammendak.productmanagement.model.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User userDtoToUser (UserDto userDto);

    UserDto userToUserDto (User user);

}
