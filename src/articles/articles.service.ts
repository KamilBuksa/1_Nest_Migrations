import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { Article } from "./entities/article.entity";

import { Request } from "express";


@Injectable()
export class ArticlesService {
  constructor(

    @InjectRepository(Article)
    private articleRepository: Repository<Article>,

  ) {
  }
  async createArticle(createArticleDto: CreateArticleDto, req: Request) {
    //@TODO dodaj messagePattern sprwdzający, czy photoId, które wysyłasz w body na pewno znajduje się w tabeli photo, jeżeli nie to throw new Error

    //create Article
    const newRecipe = this.articleRepository.create({
      ...createArticleDto,
      photoId: req.body.photoId

    });
    const createArticle = await this.articleRepository.save(newRecipe);

    return createArticle;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    console.log("update");
    const article = await this.articleRepository.preload({
      id: +id,
      ...updateArticleDto
    });
    if (!article) {
      throw new NotFoundException(`Article #${id} not found`);
    }
    return this.articleRepository.save(article);
  }

  async deleteArticle(id) {
    if (await this.articleRepository.findOne(id)) {
      const article = await this.articleRepository.findOne(id);
      console.log(article);
      return this.articleRepository.remove(article);
    } else {
      throw new NotFoundException(`Article #${id} not found`);
    }
  }


  findAll() {
    return this.articleRepository.find();
  }

  async findOne(id: number) {
    const article = await this.articleRepository.findOneBy({ id });
    if (!article) {
      throw new NotFoundException(`Article #${id} not found`);
    }
    return article;
  }





}

