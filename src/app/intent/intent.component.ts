import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Intent } from './intent';
import { IntentService } from './intent.service';

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html'
})
export class IntentComponent implements OnInit {

	intencionActual: Intent = {
		id: 0,
		tag: "",
		patterns: []
	}

  constructor(
		private intentService: IntentService,
		private activedRoute: ActivatedRoute
	) { }

  ngOnInit(): void {
		this.activedRoute.paramMap.subscribe(
			(parametro: ParamMap) =>{
				if (parametro.get("id")){
					this.findById(parseInt(parametro.get("id")!))
				}

			}
		)
  }

	findById(id: number):void {
		this.intentService.findById(id).subscribe(
			(respuesta) => this.intencionActual = respuesta
		)
	}

	save() : void {
		if (this.intencionActual.id>0){
			this.update();
		}
		if (this.intencionActual.id==0){
			this.intentService.save(this.intencionActual).subscribe()
		}

	}

	update() : void {
		this.intentService.update(this.intencionActual).subscribe()
	}
}
