import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // Queries e mutations

  /*

  // returnType: Tipo que será retornado na response 
  // params: parametros da request, caso você queira exigir algum, use: 
  // @Args('nomeDoParamNaRequest') nomeParam: typeParam

  @Query((returns) => returnType) 
  queryName(params?) {

  }
  */

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
