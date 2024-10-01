import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const ageNumber = parseInt(value.age.toString());
    
    if(isNaN(ageNumber)){
      throw new HttpException('La edad deberia ser numero', HttpStatus.BAD_REQUEST);
    }


    
    return { ...value, age: ageNumber};
  }
}
