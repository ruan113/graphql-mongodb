import { StudentService } from './student.service';
import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
