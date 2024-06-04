import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@NgModule({
    imports : [CommonModule, RouterLink],
    exports : [CommonModule, RouterLink]
})

export class SharedModule
{

}