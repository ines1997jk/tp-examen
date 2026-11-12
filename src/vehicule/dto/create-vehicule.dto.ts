import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateVehiculeDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    brand: string;

    @IsNumber()
    @IsPositive()
    price: number;


    @IsBoolean()
    isElectric: boolean;

}



