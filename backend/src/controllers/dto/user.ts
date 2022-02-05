import { Min, Max, Length, IsEmail, IsString } from "class-validator";

export class User {

    @Length(1, 15)
    private readonly nickname: string;
}