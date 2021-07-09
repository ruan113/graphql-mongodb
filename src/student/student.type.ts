import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}

/*

Estrutura de um Type

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class nameType {
  
  @Field(type => ID)
  id: string;

  // Daqui pra baixo você especifica os fields do jeito que você quiser/necessitar seguindo o modelo abaixo

  @Field()
  fieldName: fieldType;
}

*/
