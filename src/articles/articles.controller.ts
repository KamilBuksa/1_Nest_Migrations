import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req
} from "@nestjs/common";
import { Request } from "express";
import { ArticlesService } from "./articles.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";

@Controller("articles")
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService
  ) {
  }


  //Guard jest po to by mieć dostęp do req.user i z rozkodowanego tokenu wziąć id, by je przypisać do tabeli article wraz z artykułem
  // Post article and save in article table
  @Post()
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
    @Req() req: Request
  ) {
    return this.articlesService.createArticle(createArticleDto, req);
  }


  // delete article //@TODO CORRECTED - działa
  @Delete(":articleId")
  deleteArticle(
    @Param("articleId", ParseIntPipe) id: number
  ) {
    return this.articlesService.deleteArticle(id);

  }


  @Get()
  findAllArticles(
    @Query() paginationQuery
  ) {
    const { limit, offset } = paginationQuery;
    return this.articlesService.findAll();
  }

  @Get(":id")
  findOneArticle(
    @Param("id", ParseIntPipe) id: number
  ) /* Param domyślnie jest stringiem, transform:true w Pipe umożliwia otypowanie go na number */ {
    return this.articlesService.findOne(id);
  }




  @Patch(":id")
  updateArticle(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto
  ) {
    return this.articlesService.update(id, updateArticleDto);
  }


}
