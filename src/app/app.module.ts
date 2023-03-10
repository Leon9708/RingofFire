import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { InstructionsComponent } from './instructions/instructions.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ChangeIconComponent } from './change-icon/change-icon.component';
import { InfoComponent } from './info/info.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomPopUpComponent } from './bottom-pop-up/bottom-pop-up.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ImgToDialogComponent } from './img-to-dialog/img-to-dialog.component';
import { ShuffleCardsComponent } from './shuffle-cards/shuffle-cards.component';
import { CardStackComponent } from './card-stack/card-stack.component';
import { GameOverComponent } from './game-over/game-over.component';


@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    InstructionsComponent,
    ChangeIconComponent,
    InfoComponent,
    BottomPopUpComponent,
    ImgToDialogComponent,
    ShuffleCardsComponent,
    CardStackComponent,
    GameOverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    CommonModule,
    MatBottomSheetModule,
    MatTooltipModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    MatButtonToggleModule
/*     provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
