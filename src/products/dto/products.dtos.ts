import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

//PartialType: Toma los valores de CreateProduct y ademas le agrega que sean opcionales
export class UpdateProductDto extends PartialType(CreateProductDto) {}
