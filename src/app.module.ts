import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRootAsync({})],
  controllers: [],
  providers: [],
})
export class AppModule {}
