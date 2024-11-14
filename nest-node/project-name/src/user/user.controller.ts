import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query, Request, Res, Req, HttpCode, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha'
import session from 'express-session';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    const Captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966'
    })
    session.code = Captcha.text
    res.type('image/svg+xml')
    res.send(Captcha.data)
  }

  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log(Body, session.code);
    if (session.code.toLocaleLowerCase() === Body?.code?.toLocaleLowerCase()) {
      return {
        code: 200,
        message: 'success'
      }
    } else {
      return {
        code: 200,
        message: 'fail'
      }
    }
  }
}
